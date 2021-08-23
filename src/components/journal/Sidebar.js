import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout())
    }
    const handleAddNew = () => {
        dispatch(startNewNote())
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <div>
                    <i className="far fa-moon"></i>
                    <span className="ml-5">{name}</span>
                </div>

                <button
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div
                className="journal__new-entry pointer"
                onClick={handleAddNew}
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">New entry</p>
            </div>
            <JournalEntries />
        </aside>
    )
}
