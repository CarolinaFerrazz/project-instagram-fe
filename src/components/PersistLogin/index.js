import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import GetUser from '../../services/GetUser';

export default function PersistLogin() {
    const token = localStorage.getItem('token') || null;
    const [isLoading, setIsLoading] = useState(true);
    const { setAuth } = useAuth();
    useEffect(() => {
        async function log() {
            setIsLoading(true);
            if (token !== null) {
                const user = await GetUser(token);
                if (user !== null) setAuth({ email: user?.data?.email, token });
            }
            setIsLoading(false);
        }
        log();
        // eslint-disable-next-line
    }, [])
    return (
        isLoading
            ? <p>Loading</p>
            : <Outlet />
    )

}
