import React,{Component} from 'react';
import './Step.css';
 
class Step extends Component {
    constructor(props) {
        super(props);
    }
    setStepValue = (e) => { 
        this.setState ((stepState) => {
            let currentStepValue = stepState.stepValue;
    
            if (e === 'plus') {
                currentStepValue += 5;
            } else {
                currentStepValue = 1;
            }

            return({
               stepValue: currentStepValue
            });
        });
    }

    render() {
        return (
        <div className="step">
            Krok:
            <input ref={(data) => { this.setStepValue = data} } onChange={()=> this.props.setStepValue(this.setStepValue.value)} type="number" />
            {/* <button className="plus" onClick={this.props.setStepValue}>Zwiększ o X</button> */}
        </div>
    )};
}

export default Step;

    
//> Do aplikacji licznika dodaj nowy komponent o nazwie "Step", 
//którego zadaniem będzie ustawienie kroku, o ile będzie zwiększał się licznik (np. krok=5, to licznik za każdym kliknięciem przycisku będzie się zwiększał o 5).

// Dodatkowo przycisk "Zwiększ o X" ma pokazywać o ile będzie licznik będzie zwiększany (X to oczywiście wartość kroku). Minimalna wartość kroku to 1.
// Podpowiedź:
//> - wartość kroku przechowuj w obiekcie stanu komponentu "Counter"
//> - do ustalania wartości kroku użyj pola <input type="number" />, które będzie w komponencie "Step"
// - do pola input odwołuj się przez jego referencję np. <input ref={(data) => { this._inputStep = data} } type="number" /> - następnie odwołaj się do tego pola w kodzie np. let step = this._inputStep.value;
// - dodatkowo będziesz musiał się podpiąć pod zdarzenie onChange tego inputa <input ref={(data) => { this._inputStep = data} } onChange{this.updateStep} type="number" /> i gdy jego wartość została zmieniona, to aktualizuj state :) np. this.setState(....);