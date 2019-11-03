import React, { Component } from 'react';
import NavBAr from '../Layout/NavBAr';
import TemplateBlog from '../Templates/TemplateBlog';

class PageBlog extends Component {
    render() {
        return (
            <div>
               <NavBAr/>
               <TemplateBlog/>
            </div>
        )
    }
}

export default PageBlog