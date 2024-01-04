import { registerAs } from "@nestjs/config";

export default registerAs('cat', () => ({
    food: {
        name: 'food1'
    }
}))