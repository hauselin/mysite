// https://stackoverflow.com/questions/17929356/html-datalist-values-from-array-in-javascript

// list of papers
// option: display/search value (what users can search for)
// title: file name in public/papers
let paper_datalist_options = [
    {
        "option": "Lin et al 2024 accuracy prompt illusory truth effect content moderators #misinfo",
        "title": "Lin_Rand_2024-content-moderator-acc-prompt.pdf"
    },
    {
        "option": "Lin et al 2024 (supplement) accuracy prompt illusory truth effect content moderators #misinfo",
        "title": "Lin_Rand_2024-content-moderator-acc-prompt-supplement.pdf"
    },
    {
        "option": "Lin et al 2024 Reducing misinformation sharing at scale using digital accuracy prompt ads #field #accuracy-prompt #misinfo",
        "title": "https://osf.io/u8anb/download"
    },
    {
        "option": "Fusco 2024 Modulating preferences during intertemporal choices through exogenous midfrontal transcranial alternating current stimulation #theta #registered-report",
        "title": "Fusco2024-tACS.pdf"
    },
    {
        "option": "Lin et al 2024 An experimental manipulation of the value of effort #effort #registered-report",
        "title": "Lin_Inzlicht_2024-effort.pdf"
    },
    {
        "option": "Lin et al 2024 (supplement) An experimental manipulation of the value of effort #effort #registered-report",
        "title": "Lin_Inzlicht_2024-effort-supplement.pdf"
    },
    {
        "option": "Lin et al 2023 Thinking more or thinking differently? Using drift-diffusion modeling to illuminate why accuracy prompts decrease misinformation sharing #accuracy-prompt #misinfo",
        "title": "LinPennycookRand2023-thinking.pdf"
    },
    {
        "option": "Lin et al 2023 (supplement) Thinking more or thinking differently? #accuracy-prompt #misinfo",
        "title": "LinPennycookRand2023-thinking-supplement.pdf"
    },
    {
        "option": "Lin 2023 The scientific value of explanation and prediction #philosophy",
        "title": "Lin2023-BBS-scientific-value-explain-predict.pdf"
    },
    {
        "option": "Lin et al 2024 Accuracy prompts protect professional content moderators from the illusory truth effect #misinfo",
        "title": "https://osf.io/preprints/psyarxiv/gswm6/download"
    },
    {
        "option": "Bhargava et al 2023 How effective are TikTok debunking videos? #misinfo",
        "title": "Bhargava2023.pdf"
    },
    {
        "option": "Lin et al 2023 High level of correspondence across different news domain quality rating sets #misinfo",
        "title": "Lin2023-domain-quality.pdf"
    },
    {
        "option": "Lin et al 2023 (supplement) High level of correspondence across different news domain quality rating sets #misinfo",
        "title": "Lin2023-domain-quality-supplement.pdf"
    },
    {
        "option": "Lin etal 2023 Conscientiousness does not moderate the association between political ideology and susceptibility to fake news sharing #misinfo",
        "title": "Lin2023-conscientiousness-ideology.pdf"
    },
    {
        "option": "Costello et al 2023 A metacognitive blindspot in intellectual humility measures",
        "title": "https://osf.io/gux95/download"
    },
    {
        "option": "Epstein Lin 2022 Yourfeed: Towards open science and interoperable systems for social media",
        "title": "https://arxiv.org/pdf/2207.07478v1.pdf"
    },
    {
        "option": "Lin et al 2022 Average reward rate modulates behavioral and neural indices of effortful control allocation #eeg #theta",
        "title": "Lin2022-average-reward-rate.pdf"
    },
    {
        "option": "Lin Epstein et al 2022 Quantifying attention via dwell time and engagement in a social media browsing environment",
        "title": "https://arxiv.org/pdf/2209.10464.pdf"
    },
    {
        "option": "Epstein Lin et al 2022 How many others have shared this? Experimentally investigating the effects of social cues on engagement, misinformation, and unpredictability on social media #misinfo",
        "title": "https://arxiv.org/pdf/2207.07562v1.pdf"
    },
    {
        "option": "Umemoto et al 2022 Electrophysiological measures of conflict and reward processing are associated with decisions to engage in physical effort #effort #eeg",
        "title": "Umemoto2022.pdf"
    },
    {
        "option": "Depow Lin Inzlicht 2022 Cognitive effort for self, strangers, and charities #effort",
        "title": "DepowLinInzlicht2022.pdf"
    },
    {
        "option": "Jones et al 2021 To which world regions does that valence-dominance model of social perception apply. Nature Human Behaviour #open-science #replication",
        "title": "Jones2021valence-dominance-social-perception.pdf"
    },
    {
        "option": "Lin et al 2021 Promise and perils of experimentation: The mutual-internal-validity-problem. Perspectives on psychological science. #philosophy",
        "title": "Lin2021experimentation.pdf"
    },
    {
        "option": "Fromer Lin et al 2021 Expectations of reward and efficacy guide cognitive control allocation. Nature Communications. #effort #eeg #pupil",
        "title": "https://rdcu.be/cfemg"
    },
    {
        "option": "Fromer Lin et al 2021 (code) Expectations of reward and efficacy guide cognitive control allocation. Nature Communications. #effort #eeg #pupil",
        "title": "https://github.com/froemero/reward-efficacy-evc-eeg"
    },
    {
        "option": "Umemoto et al 2021 Cost-benefit analysis in physical effort expenditure #effort #eeg #theta #registered-report",
        "title": "Umemoto2021.pdf"
    },
    {
        "option": "Anderson et al 2020 The metronome response task for measuring mind wandering: Replication attempt and extension of three studies by Seli et al. Attention Perception & Psychophysics #open-science #replication",
        "title": "Anderson2020MRT.pdf"
    },
    {
        "option": "Lin et al 2020 Strong effort manipulations reduce response caution: A preregistered reinvention of the ego-depletion paradigm. Psychological science. #depletion #effort #ddm #diffusion #brms #bayes",
        "title": "https://journals.sagepub.com/doi/pdf/10.1177/0956797620904990"
    },
    {
        "option": "Lin et al 2020 (supplement & code) Strong effort manipulations reduce response caution: A preregistered reinvention of the ego-depletion paradigm. Psychological Science. #depletion #effort #ddm #diffusion #brms #bayes #supplement",
        "title": "https://github.com/hauselin/depletion_bayes"
    },
    {
        "option": "Ebersole et al 2020 Many Labs 5: Testing pre-data-collection peer review as an intervention to increase replicability #open-science #replication",
        "title": "Ebersole2020manylabs5.pdf"
    },
    {
        "option": "Chartier et al 2020 Many Labs 5: Registered replication of Albarracín et al 2008. #open-science #replication",
        "title": "Chartier2020manylabs5.pdf"
    },
    {
        "option": "Landy et al 2020 Crowdsourcing hypothesis tests: Making transparent how design choices shape research results. Psychological Bulletin. #open-science #philosophy",
        "title": "Landy2020crowdsourcing.pdf"
    },
    {
        "option": "Moshontz et at 2018 The Psychological Science Accelerator: Advancing psychology through a distributed collaborative network. Advances in Methods and Practices in Psychological Science. #open-science",
        "title": "Moshontz2018psa.pdf"
    },
    {
        "option": "Lin et al 2018 Midfrontal theta and pupil dilation parametrically track subjective conflict (but also surprise) during intertemporal choice. NeuroImage. #eeg #pupil",
        "title": "Lin2018theta.pdf"
    },
    {
        "option": "Lin et al 2018 (supplement) Midfrontal theta and pupil dilation parametrically track subjective conflict (but also surprise) during intertemporal choice. NeuroImage. #eeg #pupil #supplement",
        "title": "Lin2018thetaSupp.pdf"
    },
    {
        "option": "Francis et al 2018 Development of a within-subjectrepeated-measures ego-depletion paradigm. Social Psychology. #depletion #effort",
        "title": "Francis2018depletion.pdf"
    },
    {
        "option": "Lin & Vartanian 2018 Neuroeconomic framework for creative cognition. Perspectives on Psychological Science.",
        "title": "Lin2018creativity.pdf"
    },
    {
        "option": "Saunders et al 2017 The emotive nature of conflict monitoring in the medial prefrontal cortex. International Journal of Psychophysiology. #eeg",
        "title": "Saunders2017emotionsMPFC.pdf"
    }
];

