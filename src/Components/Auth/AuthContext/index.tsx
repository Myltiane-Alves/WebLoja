import { useState, createContext, useContext, useCallback } from 'react';
import { AuthContextType } from '../../../types/Auth/AuthContextType';
import { AuthProviderProps } from '../../../types/Auth/AuthProviderProps';
import { CurrentFormType } from '../../../types/Auth/CurrentFormType';
import { User } from '../../../types/User';

const AuthContext = createContext<AuthContextType>({
    currentForm: 'email',
    email: '',
    setEmail: () => {},
    onSubmitEmail: () => {},
})
const AuthProvider = ({ children }: AuthProviderProps) => {
    const [currentForm, setCurrentForm] = useState<CurrentFormType>('email');
    const [email, setEmail] = useState('');
    const [toke, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);

    const onSubmitEmail = useCallback(() => {

    }, [email])
}

export default AuthProvider

export const useAuth = () => {

    const context = useContext(AuthContext)

    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
}
