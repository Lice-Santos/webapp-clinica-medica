import { handleSignOut } from "../utils/signOut"

export default function BotaoSignOut(){
    return <button type="button" onClick={handleSignOut}>
            Desconectar
        </button>
}