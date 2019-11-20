export default {
    up(){
    },
    down(size){
        const sizes = {
            xs: "575.98px",
            xm: "804.98px",
            md: "991.98px",
            lg: "1199.98px"
        };
        return `@media (max-width: ${sizes[size]})`;
    }
}