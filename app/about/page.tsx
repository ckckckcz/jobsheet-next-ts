import Image from "next/image";
import { api } from "@/app/api";
import Link from "next/link";

export default async function AboutPage() {
    const user = await api.github.getUser("ckckckcz");

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#fafafa] p-6 font-sans dark:bg-[#0a0a0a]">
            <main className="relative flex w-full max-w-2xl flex-col items-center gap-8 rounded-3xl border border-zinc-200 bg-white p-12 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-none sm:items-start">
                <div className="absolute inset-x-0 top-0 -z-10 h-32 overflow-hidden blur-3xl" aria-hidden="true">
                    <div className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" />
                </div>

                <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full ring-4 ring-white dark:ring-zinc-800">
                        <Image
                            src={user.avatar_url}
                            alt={user.name || user.login}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                            {user.name || user.login}
                        </h1>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            @{user.login}
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-6 w-full text-zinc-600 dark:text-zinc-400">
                    <p className="text-lg leading-relaxed">
                        {user.bio || "No bio description available."}
                    </p>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                        <div className="flex flex-col rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Repos</span>
                            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{user.public_repos}</span>
                        </div>
                        <div className="flex flex-col rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Followers</span>
                            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{user.followers}</span>
                        </div>
                        <div className="flex flex-col rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Following</span>
                            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{user.following}</span>
                        </div>
                        <div className="flex flex-col rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-800/50">
                            <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">Location</span>
                            <span className="truncate text-sm font-bold text-zinc-900 dark:text-zinc-50">{user.location || "N/A"}</span>
                        </div>
                    </div>

                    {user.blog && (
                        <Link
                            href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit Portfolio
                        </Link>
                    )}
                </div>
            </main>
        </div>
    );
}
