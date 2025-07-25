import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Soy desarrollador .NET con más de 6 años de trayectoria, participando en proyectos para universidades, empresas y clientes particulares. Mi prioridad es optimizar procesos y mejorar la experiencia del usuario, aportando soluciones eficientes y escalables. Me mantengo en constante aprendizaje para enfrentar nuevos desafíos y sumar valor en cada trabajo.`

export const ABOUT_TEXT = `Mi especialidad es desarrollar soluciones prácticas y eficientes usando tecnologías .NET, siempre pensando en hacer más sencillo el trabajo de las personas.
He trabajado diseñando sistemas de gestión para pequeñas empresas, mejorando plataformas educativas para universidades, y desarrollando módulos financieros para optimizar procesos contables. Actualmente combino proyectos personalizados para clientes locales con mi formación constante en nuevas herramientas, buscando siempre aportar soluciones que marquen la diferencia.
Mi enfoque une la pasión por la programación con el compromiso de crear herramientas que realmente simplifiquen la vida de quienes las usan.`

export const EXPERIENCES = [
  {
    year: "Febrero 2025 - Presente",
    role: "Desarrollador Freelancer",
    company: "Independiente",
    description: ` Actualmente, desarrollo pequeños proyectos para clientes de mi zona, brindando soluciones a medida con varias tecnologías. Además, me sigo capacitando en nuevas tecnologías y metodologías de desarrollo para potenciar mis habilidades mientras busco nuevas oportunidades laborales`,
    technologies: ["Javascript", "React.js", "blazor", "SQL Server", "WinForm", "Power BI"],
  },
  {
    year: "Febrero 2024 - Diciembre 2024",
    role: "Desarrollador Semi Senior .NET",
    company: "Ecosistemas",
    description: `Participé en el desarrollo y mantenimiento de un sistema de portal para alumnos y docentes, optimizando su funcionalidad y rendimiento con tecnologías .NET. Implementé nuevas características y mejoras en procesos existentes, garantizando una experiencia eficiente y segura para los usuarios. También brindé soporte continuo y resolví incidencias para asegurar la estabilidad del sistema, colaborando en la integración de módulos, la gestión de bases de datos y la adaptación del sistema a nuevos requerimientos institucionales.`,
    technologies: ["HTML", "WebForm", "SQL Server", "WebApi", "C#", 'JavaScript'],
  },
  {
    year: "Julio 2021 - Febrero 2024",
    role: "Programador .NET",
    company: "Axxon Consulting",
    description: `Realicé tareas de desarrollo, personalización y soporte de sistemas ERP en Dynamics 365 Finance, enfocados en la gestión financiera de empresas. Participé en la integración de módulos financieros con otros sistemas internos, optimizando procesos de contabilidad, facturación y pagos. Además, implementé mejoras funcionales y optimicé procesos clave para garantizar una mayor eficiencia operativa.`,
    technologies: ["X++", "SQL Server", ".NET", "Power BI", "Dynamics 365"],
  },
  {
    year: "Octubre 2019 - Julio 2021",
    role: "Programador .NET",
    company: "CABL y Asociados",
    description: `Me encargué de la creación, gestión y mantenimiento de software para PYMES utilizando tecnologías .NET, desarrollando soluciones a medida para mejorar la operatividad y la gestión empresarial. A partir de octubre de 2020, me integré como desarrollador en un proyecto de Prevención Salud, trabajando con tecnologías de Microsoft y el framework NATAL para optimizar procesos y mejorar la experiencia del usuario.`,
    technologies: ["ASP.NET", "SQL Server", "WinForm", "NATAL"],
  },
  {
    year: "Octubre 2017 - Marzo 2019",
    role: "Programador Junior",
    company: "Universidad de la Cunca del Plata",
    description: `Participé en un proyecto para unificar y reemplazar los diversos sistemas de la universidad con una solución centralizada, desarrollando el Módulo de Gestión de Expedientes para todas las sedes utilizando ASP.NET. Implementé mejoras que optimizaron los procesos administrativos y académicos, y colaboré en la integración del módulo con otros sistemas internos para asegurar una operación fluida y eficiente.`,
    technologies: ["ASP.NET", "SQL Server", "HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Sistema de Ventas",
    image: project1,
    description:
      "Sistema de ventas para tiendas de telas y mercerías que permite gestionar de manera eficiente las compras y pedidos. Facilita el proceso de venta al ofrecer una atención al cliente rápida y organizada. Optimiza la actualización de productos y la comunicación con los proveedores, mejorando la experiencia de compra y reduciendo tiempos de espera en el punto de venta.",
    technologies: ["HTML", "CSS", "blazor", ".NET", "SQL Server"],
  },
  {
    title: "Sistema Para Local de Repuestos",
    image: project2,
    description:
      "Sistema de facturación para locales de repuestos de motos y bicicletas. Permite registrar ventas, controlar stock en tiempo real y generar comprobantes de forma rápida. Ideal para agilizar la atención y mantener un control eficiente del inventario.",
    technologies: [".NET Framework", "Power BI", "SQL Server"],
  },
  {
    title: "Reportes y Análisis de Datos",
    image: project3,
    description:
      " Módulo de análisis y reportes diseñado para visualizar métricas clave del negocio. Permite generar informes detallados de ventas, ingresos, egresos y rendimiento por periodo. Ideal para tomar decisiones estratégicas basadas en datos y mejorar la gestión operativa.",
    technologies: ["HTML", "CSS", "Power BI", ".NET"],
  },
  {
    title: "Sistema de Gestión Para Proveedor de Servicios de Internet y Cable",
    image: project4,
    description:
      "Sistema de facturación diseñado para proveedores de internet y cable. Permite gestionar planes, emitir boletas automáticas y controlar pagos de clientes en tiempo real. Optimiza procesos administrativos y mejora la atención al usuario.",
    technologies: [".NET Framework", "Power BI", "SQL Server"],
  },
];

export const CONTACT = {
  address: "Ciudad de Buenos Aires - Argentina ",
  phoneNo: "+54 9 11 26320835",
  email: "cesar91bo@gmail.com",
};
