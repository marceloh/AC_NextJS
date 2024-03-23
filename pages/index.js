import Link from 'next/link'

export default function HomePage() {
    return (
        <div>
            <h1>Alura - Home</h1>
            <Link href="/faq">
                Ir para a página de perguntas frequentes
            </Link>
        </div>
    )
}