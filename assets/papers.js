// https://stackoverflow.com/questions/17929356/html-datalist-values-from-array-in-javascript

// list of papers
// option: display/search value (what users can search for)
// title: file name in public/papers
var paper_datalist_options = [
    {
        "option": "Lin et al 2021. Instilling the value of effort (Stage 1 acceptance). Nature Human Behaviour. #effort",
        "title": "Lin2021instilling_value_effort_stage1.pdf"
    },
    {
        "option": "Lin et al 2021. Promise and perils of experimentation: The mutual-internal-validity-problem. Perspectives on psychological science. #philosophy",
        "title": "Lin2021experimentation.pdf"
    },
    {
        "option": "Lin et al 2020. Strong effort manipulations reduce response caution: A preregistered reinvention of the ego-depletion paradigm. Psychological science. #depletion #effort #ddm #diffusion #brms #bayes",
        "title": "https://journals.sagepub.com/doi/pdf/10.1177/0956797620904990"
    },
    {
        "option": "Lin et al 2020. (supplement & code) Strong effort manipulations reduce response caution: A preregistered reinvention of the ego-depletion paradigm. Psychological Science. #depletion #effort #ddm #diffusion #brms #bayes #supplement",
        "title": "https://github.com/hauselin/depletion_bayes"
    },
    {
        "option": "Jones et al 2021. To which world regions does that valence-dominance model of social perception apply. Nature Human Behaviour #open-science #replication",
        "title": "Jones2021valence-dominance-social-perception.pdf"
    },
    {
        "option": "Frömer, Lin et al 2021. Expectations of reward and efficacy guide cognitive control allocation. Nature Communications. #effort #eeg #pupil",
        "title": "https://rdcu.be/cfemg"
    },
    {
        "option": "Frömer, Lin et al 2021 (code). Expectations of reward and efficacy guide cognitive control allocation. Nature Communications. #effort #eeg #pupil",
        "title": "https://github.com/froemero/reward-efficacy-evc-eeg"
    },
    {
        "option": "Ebersole et al 2020. Many Labs 5: Testing pre-data-collection peer review as an intervention to increase replicability #open-science #replication",
        "title": "Ebersole2020manylabs5.pdf"
    },
    {
        "option": "Chartier et al 2020. Many Labs 5: Registered replication of Albarracín et al 2008. #open-science #replication",
        "title": "Chartier2020manylabs5.pdf"
    },
    {
        "option": "Landy et al 2020. Crowdsourcing hypothesis tests: Making transparent how design choices shape research results. Psychological Bulletin. #open-science #philosophy",
        "title": "Landy2020crowdsourcing.pdf"
    },
    {
        "option": "Anderson et al 2020. The metronome response task for measuring mind wandering: Replication attempt and extension of three studies by Seli et al. Attention Perception & Psychophysics #open-science #replication",
        "title": "Anderson2020MRT.pdf"
    },
    {
        "option": "Lin & Vartanian 2018. Neuroeconomic framework for creative cognition. Perspectives on Psychological Science.",
        "title": "Lin2018creativity.pdf"
    },
    {
        "option": "Lin et al 2018. Midfrontal theta and pupil dilation parametrically track subjective conflict (but also surprise) during intertemporal choice. NeuroImage. #eeg #pupil",
        "title": "Lin2018theta.pdf"
    },
    {
        "option": "Lin et al 2018 (supplement). Midfrontal theta and pupil dilation parametrically track subjective conflict (but also surprise) during intertemporal choice. NeuroImage. #eeg #pupil #supplement",
        "title": "Lin2018thetaSupp.pdf"
    },
    {
        "option": "Moshontz et at 2018. The Psychological Science Accelerator: Advancing psychology through a distributed collaborative network. Advances in Methods and Practices in Psychological Science. #open-science",
        "title": "Moshontz2018psa.pdf"
    },
    {
        "option": "Francis et al 2018. Development of a within-subjectrepeated-measures ego-depletion paradigm. Social Psychology. #depletion #effort",
        "title": "Francis2018depletion.pdf"
    },
    {
        "option": "Saunders et al 2017. The emotive nature of conflict monitoring in the medial prefrontal cortex. International Journal of Psychophysiology. #eeg",
        "title": "Saunders2017emotionsMPFC.pdf"
    }
];

