import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initialData'
import Column from './components/Column'

class App extends React.Component{
    state = initialData

    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const column = this.state.columns[source.droppableId]
        const newSubjectIds = Array.from(column.subjectIds)
        newSubjectIds.splice(source.index, 1)
        newSubjectIds.splice(destination.index, 0, draggableId)

        const newColumn = {
            ...column,
            subjectIds: newSubjectIds
        }

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        }
        this.setState(newState)
    }
    
    render(){
        return (
            <DragDropContext onDragEnd={this.onDragEnd}
            >
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId]
                    const subjects = column.subjectIds.map(subjectId => this.state.subjects[subjectId])
                    return <Column key={column.id} column={column} subjects={subjects} />
                })}
            </DragDropContext>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
