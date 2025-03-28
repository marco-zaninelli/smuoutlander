import React, {useState, useEffect} from "react";
import Image from "next/image";
import {urlFor} from "@/lib/imageBuilder";

const ImageGrid = ({images}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    // Disable scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            // Disable scroll
            document.body.style.overflow = "hidden";
        } else {
            // Enable scroll
            document.body.style.overflow = "auto";
        }

        // Clean up on component unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative w-full h-0 pb-[100%] overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(image)}
                    >
                        <Image
                            src={urlFor(image).url()}
                            alt={`Image ${index}`}
                            width={500}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Modal for Fullscreen Image */}
            {isModalOpen && (
                <div className={`${isModalOpen ? "opacity-100" : "opacity-0"} transition-all duration-500`}>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 cursor-pointer p-4"
                        onClick={handleCloseModal}
                    >
                        <Image
                            src={urlFor(selectedImage).url()}
                            width={1500}
                            height={800}
                            alt="Fullscreen"
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGrid;
