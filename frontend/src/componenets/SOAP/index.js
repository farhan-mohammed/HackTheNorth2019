import React from 'react'
import './SOAP.css'
import SOAPSummary from '../../SOAPSummary'
class SOAP extends React.Component{
    render(){
        return(<div className="soap-grid">
            
            <section className = "soap-grid-SOAPview soap-grid-son">
                <SOAPSummary title ="Objective" ></SOAPSummary>
                <SOAPSummary title="Subjective"></SOAPSummary>
                <SOAPSummary title="Assessment"></SOAPSummary>
                <SOAPSummary title="Plan" ></SOAPSummary>
            </section>
            <section className = "soap-grid-main soap-grid-son">
                middle
            </section>
            <section className = "soap-grid-buttons soap-grid-son">
                buttons
            </section>
        </div>)
    }
}
export default SOAP