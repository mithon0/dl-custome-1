import React from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const InputField = ({ type, text, showPassword, setShowPassword,name }) => {

    return (
        <>
            {
                type === "password" ?
                    <>
                        <input
                            type={`${showPassword ? "text" : "password"}`}
                            placeholder={text}
                            className="input input-bordered input-primary w-full max-w-xs my-3 rounded-2xl`"
                        />

                        <button className='absolute right-3 top-[147px] lg:right-10 lg:top-[70%] '
                            onClick={() => { setShowPassword(!showPassword) }}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye></AiOutlineEye>}
                        </button> </>


                    :

                    <input
                        name={name}
                        type={type}
                        placeholder={text}
                        className={`relative ${type === "textarea" ? "textarea textarea-bordered textarea-lg w-full max-w-sm textarea-primary mt-4 h-28" : "input input-bordered input-primary w-full max-w-xs my-3 rounded-2xl`"}`} />
            }
        </>


    );
};

export default InputField;

{/* <input
                type={type}
                placeholder={text}
                className={`relative ${type === "textarea" ? "textarea textarea-bordered textarea-lg w-full max-w-sm textarea-primary mt-4 h-28" : "input input-bordered input-primary w-full max-w-xs my-3 rounded-2xl`"}`}
            /> */}