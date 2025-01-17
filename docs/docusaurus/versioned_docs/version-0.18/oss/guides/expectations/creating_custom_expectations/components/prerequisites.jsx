import React from 'react'
import VersionedLink from '@site/src/components/VersionedLink'

/**
 * A flexible Prerequisites admonition block.
 * Styling/structure was copied over directly from docusaurus :::info admonition.
 *
 * Usage with only defaults
 *
 * <Prerequisites>
 *
 * Usage with additional list items
 *
 * <Prerequisites>
 *
 * - Have access to data on a filesystem
 *
 * </Prerequisites>
 */
export default class Prerequisites extends React.Component {
  defaultPrerequisiteItems () {
    return [
      <li key={0.1}>
        <li><VersionedLink to='/oss/tutorials/quickstart'>Completion of the Quickstart.</VersionedLink></li>
        <li><a href='/docs/contributing/contributing_setup'>A configured and functional development environment.</a></li>
      </li>]
  }


  render () {
    return (
      <div>
          <ul>
            {this.defaultPrerequisiteItems()}
          </ul>
          {this.props.children}
      </div>
    )
  }
}

