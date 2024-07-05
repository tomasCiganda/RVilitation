export interface topcard {
    bgcolor: string,
    icon: string,
    title: string,
    subtitle: string
}

export const topcards: topcard[] = [

    {
        bgcolor: 'success',
        icon: 'bi bi-person',
        title: '4',
        subtitle: 'Nuevos pacientes'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-person',
        title: '2',
        subtitle: 'Pacientes inactivos'
    },
    {
        bgcolor: 'success',
        icon: 'bi bi-person',
        title: '4',
        subtitle: 'Pacientes con tarea asignada'
    },
    {
        bgcolor: 'danger',
        icon: 'bi bi-person',
        title: '2',
        subtitle: 'Pacientes sin tarea asignada'
    },

] 