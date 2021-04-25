import "./styles.css";
import { useEffect, useState } from "react";
import { User } from "../../../services/typesUser";
import * as yup from 'yup';
import { fetchUsers, postUsers } from "../../../api";
import { toast } from "react-toastify";

const userSchema = yup.object().shape({
    email: yup
        .string()
        .email()
        .required(),
    name: yup
        .string()
        .required(),
    pass: yup.string().required('Password é obrigatorio'),
    cPass: yup.string().required('Password é obrigatorio')
        .oneOf([yup.ref('pass'), null], 'Passwords devem ser iguais'),
    cpf: yup.string().required('CPF necessario!')
  });

export default function Users(){
    const [user, setUser] = useState<User>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cPass, setCPass] = useState('');
    const [cpf, setCpf] = useState('');
    
    useEffect( () => {
        fetchUsers()
            .then(response => setUser(response.data))
            .catch(() => {
                toast.warning('Erro ao cadastrar evento!');
            })
    },[]);
    

    const handleSubmit = async () => {   
    
        const formData ={
            email,
            name,
            pass,
            cPass,
            cpf
        }
        const isValid = await userSchema.isValid(formData)

        if (isValid){
            const saveUsers = {
                ...user,
                name,
                email,
                pass,
                cpf,
                status:0
            }
            postUsers(saveUsers)
                .then(() => {
                    toast.warning('Usuario cadastrado!');
                    
                    setName('');
                    setEmail('');
                    setCpf('');
                    setPass('');
                    setCPass('');
                })
                .catch(() => {
                    toast.error('Erro ao cadastrar usuario!');
                })
        }else{
            toast.warning('Usuario não é valido!');
        }
    }

    return (
        <div className="landing-page-form">  
            <form
                onSubmit={handleSubmit} 
                className="landing-page-form">
                <fieldset>
                    <legend>Usuarios</legend>
                    <div className="input-block">
                        <label htmlFor="name">Nome:</label>
                        <input
                            id="name"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            placeholder="Digite seu email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="cpf">CPF:</label>
                        <input
                            id="cpf"
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={(event) => setCpf(event.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="password">Password:</label>
                        <input
                            id="password"
                            placeholder="Digite sua senha"
                            type="password"
                            value={pass}
                            onChange={(event) => setPass(event.target.value)}
                            required={true}
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="c-password">Confirmar Password:</label>
                        <input
                            id="c-password"
                            placeholder="Digite sua senha"
                            type="password"
                            value={cPass}
                            onChange={(event) => setCPass(event.target.value)}
                            required={true}
                        />
                    </div>
                    <button className="confirm-button" type='submit'>CONFIRMAR</button>
                </fieldset>
            </form>
        </div>
    );
}