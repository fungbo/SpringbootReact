import React from "react";
import $ from "jquery";
import ReportingHead from "./reporting-head.jsx";
import ReportingBody from "./reporting-body.jsx";
import span from "./span.js";


class ReportingTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            head: [],
            rows: {name: '', values: [], children: [{name: '', values: []}]}
        };
    }


    fetchHead() {
        $.ajax({
            type: 'GET',
            dataType: "text",
            url: '/head',
            success: function (data) {
                var json = JSON.parse(data);
                this.setState({head: json})
            }.bind(this)
        });
    }

    fetchRows() {
        // $.ajax({
        //     type: 'GET',
        //     dataType: 'json',
        //     url: './data/rows.json',
        //     success: function (data) {
        //         this.setState({rows: data})
        //     }.bind(this)
        // })

        var data = {
            "name": "Moh",
            "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4],
            "children": [
                {
                    "name": "NIASSA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4],
                    "children": [
                        {
                            "name": "District1",
                            "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                        },
                        {
                            "name": "District2",
                            "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                        }
                    ]
                },
                {
                    "name": "CABO DELGADO",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "NAMPULA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "ZAMBEZIA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "TETE",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "MANICA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "SOFALA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "INHAMBANE",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "GAZA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "MAPUTO PROVINCIA",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                },
                {
                    "name": "MAPUTO CIDADE",
                    "values": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4]
                }
            ]
        };

        this.setState({rows: data})
    }

    render() {
        return (
            <table className="ReportingTable">
                <ReportingHead spans={span.calculateSpan(this.state.head)}/>
                <ReportingBody data={this.state.rows}/>
            </table>
        )
    }

    componentDidMount() {
        this.fetchHead();
        this.fetchRows();
    }
}

export default ReportingTable;
