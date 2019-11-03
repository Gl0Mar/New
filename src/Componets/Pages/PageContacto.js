import React, { Component } from 'react';
import NavBAr from '../Layout/NavBAr';
import TemplateContacto from '../Templates/TemplateContacto';

class PageContacto extends Component {
    render() {
        return (
            <div>
               <NavBAr/>
               <TemplateContacto/>
               
            </div>
        )
    }
}

export default PageContacto