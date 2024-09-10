import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className="container h-screen w-screen overflow-hidden absolute inset-0 flex flex-col justify-center items-center">
            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.5}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
            <p>Sign in with Google</p>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
        </div>
    )
}