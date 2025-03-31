import imageUrlBuilder from '@sanity/image-url';
import sanityClient from "@/lib/sanityClient";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source);
}
