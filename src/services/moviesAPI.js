import axios from "./axios";

export const getMoviesByWordRequest = async ({ search }) => {
    if (search === "") {
        return null;
    }

    try {
        const response = await axios(`/movies/search?word=${search}`);
        console.log(response.data);
        return response.data;
    } catch (e) {
        throw new Error("Error searching movies");
    }
};

export const getAllMoviesRequest = async () => {
    const res = await axios.get("/movies");
    return res.data;
};

export const newMovieOrderRequest = async (values) => {
    const form = new FormData();

    form.append("image", values.image[0]);
    form.append("stock", 0);
    for (const key in values) {
        form.append(key, values[key]);
    }
    console.log(form);

    const res = await axios.post("/movies", form, {
        Headers: {
            "Context-Type": "multipart/form-data",
        },
    });
    return res.data;
};

export const getShoppingCartRequest = async () => {
    const res = await axios("/shoppingCart");
    return res.data;
};

export const updateShoppingCartRequest = async (movies) => {
    const res = await axios.put("/shoppingCart", movies);
    return res.data;
};

export const buyShoppingCartRequest = async () => {
    const res = await axios.get("/shoppingCart/buy");
    return res.data;
};

export const getPurchasesRequest = async () => {
    const res = await axios.get("/purchases");
    return res.data;
};
