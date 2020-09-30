import React, { useEffect } from 'react'

export default function AuthLayout(props) {
    useEffect(() => {

    })
    return (
        <div className="admin">
            <aside>
                sidebar
        </aside>
            <div>
                {props.children}
            </div>

        </div>
    )
}
