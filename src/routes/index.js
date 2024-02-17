import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PrivateNavigation from './PrivateNavigation';
import PublicNavigation from './PublicNavigation';

export default function RoutesContainer() {
    const dispatch = useDispatch();
    const { userData } = useSelector((state) => state.session);

    return (
        <>
            {userData ? (
                <PrivateNavigation isAuth={Boolean(userData)} userData={userData} />
            ) : (
                <PublicNavigation />
            )}
        </>
    );
}