import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import Subject from './Subject'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`
const Title = styled.h3`
    padding: 8px;
`
const SubjectList = styled.div`
    padding: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props => props.isDraggingOver ? 'skyblue' : 'white'};
    flex-grow: 1;
    min-height: 100px;
`

export default class Column extends Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id} >
                    {provider => (
                        <SubjectList
                            ref={provider.innerRef}
                            {...provider.droppableProps}
                        >
                            {this.props.subjects.map((subject, index) => <Subject key={subject.id} subject={subject} index={index} />)}
                            {provider.placeholder}
                        </SubjectList>
                    )}
                </Droppable>
            </Container>
        )
    }
}
