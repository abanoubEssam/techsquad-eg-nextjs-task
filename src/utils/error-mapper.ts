import { NetworkError } from "models/errors.model";

export const mapError = (apiError) => {
    if (!apiError.response) {
        return new NetworkError();
    }
}