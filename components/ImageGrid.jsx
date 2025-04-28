import React, { useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/imageBuilder";

// Component to display a grid of images with a fullscreen modal view
const ImageGrid = ({ images }) => {
    const [isModalOpen, setModalOpen] = useState(false); // Tracks modal visibility
    const [selectedImage, setSelectedImage] = useState(""); // Stores the selected image for fullscreen view

    // Toggle page scroll based on modal state
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden"; // Disable scroll when modal is open
        } else {
            document.body.style.overflow = "auto"; // Enable scroll when modal is closed
        }

        // Cleanup: Ensure scroll is enabled if component unmounts
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isModalOpen]);

    // Handle clicking an image to open it in fullscreen modal
    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    // Close the modal
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            {/* Grid layout for images */}
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

            {/* Fullscreen modal when an image is selected */}
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
