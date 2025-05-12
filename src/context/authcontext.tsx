'use client'

import { createContext, useContext, ReactNode, useState } from 'react'

interface AuthContextType {
	login(): void
	isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
	children,
}: {
	children: ReactNode,
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const login = () => {

	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)

	if (context === undefined) {
		throw new Error('authprovider not defined')
	}

	return context
}
