import React from "react";
import './Visualizer.css';
import {getMergeSortAnimations} from '../Algorithms/algorithms.js'

class Visulizer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray() {
        const array = [];

        for(let i = 0; i < 200; i++){
            array.push(randomIntFromInterval(5,600));
        }
        this.setState({array});
    }

    mergeSort(){
        const animations = getMergeSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : '#8FA6A6';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 5);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`
                }, i * 5);
            }
        }
    }

    quickSort(){
        
    }

    heapSort(){
        
    }

    bubbleSort(){
        
    }

    render(){
        const {array} = this.state;

        return (<>
            <div className="header">
                <h2 className="title">Sorting Arrays</h2>
                <div className="buttons">
                    <button className="button" id="new" onClick={() => this.resetArray()}>New Array</button>
                    <button className="button" onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className="button" onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className="button" onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className="button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
            <div className="array-container">
                    {array.map((value, idx) => (
                        <div className="array-bar" key={idx} style={{height: `${value}px`}}>
                        </div>
                    ))}
                </div>
            </>
        );    
        
    };

}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Visulizer;