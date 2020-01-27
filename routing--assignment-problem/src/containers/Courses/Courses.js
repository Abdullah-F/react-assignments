import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './Courses.css';
import Course from '../Course/Course'

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    showCourseHandler =(courseId)=>{
        const course = this.state.courses.find(c => c.id === +courseId)
        this.props.history.push(`${this.props.match.path}/${courseId}?title=${course.title}`)
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article onClick={()=> this.showCourseHandler(course.id)} className="Course" key={course.id}>{course.title}</article>;
                        } )
                    }
                </section>
                <Route path={`${this.props.match.path}/:id`} component={Course} courses={this.state.courses}></Route>
            </div>
        );
    }
}

export default Courses;