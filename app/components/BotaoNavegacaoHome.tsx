import Link from "next/link";

interface BotaoNavegacaoHomeProps {
    href: string;
    textoBotao: string;
}
export function BotaoNavegacaoHome({ href, textoBotao }: BotaoNavegacaoHomeProps){
    return(
        <Link href={`/${href}`}>
            <button className="bg-primary-500 text-white w-full px-4 py-2 rounded-md hover:opacity-80 cursor-pointer">
                {textoBotao}
            </button>
        </Link>
    )
}