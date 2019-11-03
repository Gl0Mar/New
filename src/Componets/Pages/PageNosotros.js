import React, { Component } from 'react';
import NavBAr from '../Layout/NavBAr';
import TemplateNosotros from '../Templates/TemplateNosotros';

class PageNosotros extends Component {
    render() {
        return (
            <div>
               <NavBAr/>
               <TemplateNosotros/>
            </div>
        )
    }
}

export default PageNosotros