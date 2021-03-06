import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => props.isDragging ? 'lightgreen' : 'white'};

    display: flex;
`

const Handle = styled.div`
    width: 20px;
    height: 20px;
    background-color: orange;
    border-radius: 4px;
    margin-right: 8px;
`

class Subject extends Component {
    render() {
        return (
            <Draggable draggableId={this.props.subject.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <Handle {...provided.dragHandleProps}/>
                        {this.props.subject.content}
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Subject
