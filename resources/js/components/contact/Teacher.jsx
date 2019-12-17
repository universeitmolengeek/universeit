import React from 'react'
import { TeacherItem } from './TeacherItem'

export const Teacher = () => {
    return (
        <div>
            <div id="sectionTeachers">
                <div class="container my-5 ">
                    <div class="row d-flex justify-content-center align-items-center">
                        <div class="col-md-3 widget-wrap mx-3">
                            <TeacherItem />
                        </div>
                        <div class="col-md-3 widget-wrap mx-3">
                            <TeacherItem />
                        </div>
                        <div class="col-md-3 widget-wrap mx-3">
                            <   TeacherItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
