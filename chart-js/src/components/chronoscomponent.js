import React from 'react';
import Button from './button';
import './chronoscomponent.css';


export default class Chronoscomponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valor: 0.0
        }
    }

    /**
     * @brief Add 100 to valor input
     */
    plus = () => {
        this.setState({ valor: this.state.valor + 100 })
    }

    /**
     * @brief subtract 100 to valor input
     */
    minus = () => {
        this.setState({ valor: this.state.valor - 100 })
    }

    render() {
        return (
            <div className="chronoscomponent-chronoscomponent-5">
                <div className="chronoscomponent-0">
                    <div className="chronoscomponent-0-0">
                        <div className="chronoscomponent-0-0-0">
                            <div className="chronoscomponent-r_-2">R$</div>
                        </div>
                    </div>
                    <input type="text" className="chronoscomponent-text_input-9" value={this.state.valor} />
                    <div className="chronoscomponent-0-2">
                        <div className="chronoscomponent-0-2-0">
                            <div className="chronoscomponent-button_instance-5" onClick={this.plus}>
                                <Button state={"default"} text={"+"} />
                            </div>
                        </div>
                    </div>
                    <div className="chronoscomponent-0-3">
                        <div className="chronoscomponent-0-3-0">
                            <div className="chronoscomponent-button_instance_2" onClick={this.minus}>
                                <Button state={"default"} text={"-"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
