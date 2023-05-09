import React ,{ useState } from "react";
const Validation = () => {
    const [val, setval] = useState(0);
    const schange = () => setval((previous) => previous = val + 1);

    return (
          <>
            <h1> hello</h1>
            <h1 onClick={schange}> {val}</h1 > 
            </>
    );
}
export default Validation;