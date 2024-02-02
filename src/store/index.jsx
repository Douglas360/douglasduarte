import { createGlobalState } from "react-hooks-global-state"

const { setGlobalState, useGlobalState, getGlobalState } = createGlobalState({
    modal: 'scale(0)',
    showModal: 'scale(0)',
    projectTitle:'',
    projectDescription:'',
    projectImageURL:'',
    techStack:[],
})

export {
    setGlobalState,
    useGlobalState,
    getGlobalState,
}