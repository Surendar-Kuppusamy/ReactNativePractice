import React, { useMemo, useState, FC } from 'react';

interface loadContext {
    loading: boolean;
    setLoading: (loading: boolean) => void
}

export const LoadingContext        = React.createContext<loadContext | null>(null);