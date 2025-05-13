'use client'

import { createContext, useContext, ReactNode, useState } from 'react'
import { AuthMock } from '@/lib/mockdata'

interface AuthContextType {
	login(email: string, password: string): boolean;
	logout(): void;
	isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({
	children,
}: {
	children: ReactNode,
}) {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const login = (email: string, password: string): boolean => {
		const pw = AuthMock.find((val) => val.email === email)?.password;
		if (!pw || pw !== password) {
			return false;
		} else {
			setIsAuthenticated(true);
			return true;
		}
	}

	const logout = () => {
		setIsAuthenticated(false);
	}

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
