import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { Sidebar } from './Sidebar'
import { useSelector } from "react-redux"

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes);

    return (
        <div
            className="journal__main animate__animated animate__fadeIn animate__faster"
        >
            <Sidebar />

            <main className="journal__nothingselected">
                {
                    (active)
                        ? (<NoteScreen />)
                        : (<NothingSelected />)
                }
            </main>
        </div>
    )
}
