import * as React from 'react';

export interface Props {
    name: string;
    enthusiamLevel?: number;
}

// STATELESS COMPONENT
function Hello({name, enthusiamLevel=1}: Props){
    if(enthusiamLevel <= 0){
        throw new Error('You could be more enthusiastic');
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiamLevel)}
            </div>
        </div>
    )
}

export default Hello;

function getExclamationMarks(numChars: number){
    return Array(numChars + 1).join('!')
}

/* class Hello extends React.Component<Props,object>{
    render(){
        const {name, enthusiamLevel=1} = this.props;

        if(enthusiamLevel <= 0){
            throw new Error('You could be..');
        }

        return (
            <div>
                <div>
                    Hello {name + getExclamationMarks(enthusiamLevel)}
                </div>
            </div>
        )
    }
} */
