import React from 'react'
import './Record.css'
class Record extends React.Component{
    componentDidMount() {
        event.preventDefault();
        const db = app.database();
        soap = db.ref('note' + '/subjective').once('value')
        .then(function(snapshot) {
            var uname = snapshot.val()
        })

    }
    
    render(){
        return <div className="Record-con"><span className="rec">Record #{this.props.id ||'None'}</span> <span className="rec-right">Date Published:{this.props.date || 'AHAHAHAHAHAH'}</span>
        <div className="soap-con">
            <div className="soap-s">
                <div className="soap-s-title">Subjective</div>
                <div className="soap-s-body">aha</div>
            </div>
            <div className="soap-o">
                <div className="soap-o-title">Objective</div>
                <div className="soap-o-body">aha</div>
            </div>
            <div className="soap-a">
                <div className="soap-a-title">Abjective</div>
                <div className="soap-a-body">aha</div>
            </div>
            <div className="soap-p">
                <div className="soap-p-title">Pabjective</div>
                <div className="soap-p-body">aha</div>
                </div>
        </div>
        </div>
    }
}
export default Record