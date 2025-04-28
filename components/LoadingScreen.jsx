import styles from "@/styles/Loader.module.css";

// Fullscreen loading spinner component
export default function LoadingScreen() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            {/* Loader styled via CSS module */}
            <div className={styles.loader}></div>
        </div>
    );
}
