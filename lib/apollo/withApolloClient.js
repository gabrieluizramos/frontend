import {Component} from 'react'
import initApollo from './initApollo'
import Head from 'next/head'
import {getDataFromTree} from 'react-apollo'
import {getJwt} from 'lib/auth'
export default (App) => {
  return class Apollo extends Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps(ctx) {
      const {Component, router, ctx: context} = ctx

      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }

      const apolloState = {}

      const jwt = getJwt(context)

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      const apollo = initApollo(undefined, jwt)
      try {
        // Run all GraphQL queries
        await getDataFromTree(
          <App
            {...appProps}
            Component={Component}
            router={router}
            apolloState={apolloState}
            apolloClient={apollo}
          />
        )
      } catch (error) {
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        console.error('Error while running `getDataFromTree`', error)
      }

      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }

      // Extract query data from the Apollo store
      apolloState.data = apollo.cache.extract()

      return {
        jwt,
        ...appProps,
        apolloState
      }
    }

    constructor(props) {
      super(props)
      // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline
      this.apolloClient =
        props.apolloClient || initApollo(props.apolloState.data, props.jwt)
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />
    }
  }
}