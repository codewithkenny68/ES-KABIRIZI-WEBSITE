(function () {
  const navItems = [
    ['home', 'Home', 'index.html'],
    ['about', 'About Us', 'about.html'],
    ['academic', 'Academic', 'academic.html'],
    ['admission', 'Admission', 'admission.html'],
    ['student-life', 'Student Life', 'student-life.html'],
    ['mission', 'Mission', 'mission.html'],
    ['news', 'News', 'news.html'],
    ['gallery', 'Gallery', 'gallery.html'],
    ['support', 'Support', 'support.html'],
    ['teachers', 'Teachers', 'teachers.html'],
    ['library', 'Library', 'library.html'],
    ['calendar', 'Calendar', 'calendar.html'],
    ['results', 'Results', 'results.html'],
    ['admin', 'Admin', 'admin.html']
  ];

  const pages = {
    home: {
      title: 'ES Kabirizi',
      eyebrow: 'Ecole Secondaire de Kabirizi',
      heading: 'Learning with science, conscience, and community care.',
      copy: 'A modern school website for admissions, academics, student life, news, gallery, support, and administration.',
      image: 'kabirizi picsss/20260323_163059.JPG',
      cta: [['Apply Now', 'admission.html'], ['Donate', 'support.html']],
      body: [
        statBand(),
        principalWelcome(),
        featureGrid([
          ['map-pin', 'Easy Access', 'The road passes near the school, making visits and learner movement easier.'],
          ['heart-pulse', 'Near Health Post', 'The nearby health post supports student and community wellbeing.'],
          ['utensils', 'Alimentation', 'School feeding helps learners remain active, healthy, and focused.'],
          ['atom', 'Future Programs', 'Mathematics and Science, STEAM 1, and Languages prepare students for opportunity.']
        ]),
        splitSection('A Bigger School Portal', 'ES Kabirizi now has dedicated pages for academic records, admissions, daily life, mission, school news, public gallery, support, teachers, library, calendar, and results. Each page opens as its own dashboard with a campus image at the top.', 'kabirizi picsss/20260323_163138.JPG'),
        programPathways(),
        campusLifeShowcase(),
        admissionSteps(),
        registrationForm(),
        homeNewsPreview(),
        donationSection(),
        partnerStrip(),
        quickLinks()
      ].join('')
    },
    about: {
      title: 'About Us | ES Kabirizi',
      eyebrow: 'About Us',
      heading: 'A school rooted near the community it serves.',
      copy: 'Learn about the school history, location, contact channels, social media, and programs.',
      image: 'kabirizi picsss/20260323_164135.JPG',
      body: [
        dashboardCards([
          ['School Description', 'ES Kabirizi is near a health post, has alimentation support, and is accessible because the road passes near the school.'],
          ['School History', 'The school has grown through discipline, collaboration, and service, preparing learners for Rwanda through science, languages, and values.'],
          ['Contact', 'Phone: +250 788 499 105<br>Email: eskabirizi02@gmail.com<br>Social media: Facebook, X, LinkedIn, YouTube, WhatsApp.'],
          ['Programs', 'Mathematics and Science, STEAM 1, Languages, student leadership, and community service.']
        ]),
        '<section class="page-section bg-white"><div class="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center"><div><p class="section-label text-sm font-bold uppercase">Location</p><h2 class="section-title">Find ES Kabirizi</h2><p class="section-copy">The school is located in Kabirizi, Ngoma District, Rwanda. The map helps visitors and families orient themselves before coming to campus.</p></div><div class="rounded-2xl overflow-hidden border border-slate-200 shadow-xl"><iframe title="ES Kabirizi map" src="https://www.google.com/maps?q=Kabirizi%20Ngoma%20Rwanda&output=embed" class="w-full h-96 border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></section>'
      ].join('')
    },
    academic: {
      title: 'Academic | ES Kabirizi',
      eyebrow: 'Academic Dashboard',
      heading: 'Courses, departments, grades, attendance, and status.',
      copy: 'A clear academic page for students, parents, teachers, and leaders.',
      image: 'kabirizi picsss/science.jpg',
      body: [
        dashboardCards([
          ['Student Course / Program', 'Mathematics and Science, STEAM 1, Languages, and general lower-secondary courses.'],
          ['Department', 'Sciences, Languages, Humanities, ICT, discipline, and student support.'],
          ['Academic Year', 'Students are grouped by school year, class level, and active record.'],
          ['Semester', 'Semester progress includes lessons, assignments, tests, discipline, and teacher comments.'],
          ['Grades / GPA', 'A GPA area can help students and parents monitor progress.'],
          ['Attendance', 'Daily presence, late arrivals, and absence reasons can be tracked.'],
          ['Academic Status', 'Active, promoted, repeating, transferred, or graduated.'],
          ['Intervention', 'Learners needing help can be flagged for teacher and parent follow-up.']
        ]),
        progressSection()
      ].join('')
    },
    admission: {
      title: 'Admission | ES Kabirizi',
      eyebrow: 'Admission',
      heading: 'Apply, register, and follow admission progress.',
      copy: 'Registration can be completed by email or phone number.',
      image: 'kabirizi picsss/20260323_163308.JPG',
      body: [
        dashboardCards([
          ['Application', 'Submit student information and program interest for school follow-up.'],
          ['Achievement', 'Share marks, certificates, discipline record, or learner achievements.'],
          ['Registration', 'Families may register using either an email address or phone number.'],
          ['Follow-Up', 'The school office can review submissions in the admin panel.']
        ]),
        registrationForm()
      ].join('')
    },
    'student-life': {
      title: 'Student Life | ES Kabirizi',
      eyebrow: 'Student Life',
      heading: 'Daily timetable, activities, clubs, and student care.',
      copy: 'A school day balanced between academics, discipline, meals, activities, and support.',
      image: 'kabirizi picsss/garuka ushimee pics.jpg',
      body: [
        '<section class="page-section bg-white"><div class="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-8"><div><p class="section-label text-sm font-bold uppercase">Day Timetable</p><h2 class="section-title">A steady school rhythm</h2><p class="section-copy">Students move through assembly, lessons, alimentation, activities, revision, and support.</p></div><div class="overflow-hidden rounded-2xl border border-slate-200 shadow-lg"><table class="dashboard-table bg-white"><tbody><tr><th>Morning</th><td>Assembly, cleanliness, attendance, and first lessons.</td></tr><tr><th>Midday</th><td>Alimentation, rest, clubs, and teacher follow-up.</td></tr><tr><th>Afternoon</th><td>Lessons, practical activities, revision, and sports.</td></tr><tr><th>Evening</th><td>Study preparation, discipline review, and student support.</td></tr></tbody></table></div></div></section>',
        featureGrid([
          ['book-open', 'Lessons', 'Daily learning and revision help students strengthen understanding.'],
          ['users', 'Clubs', 'Leadership, culture, science, debate, and service clubs.'],
          ['dumbbell', 'Sports', 'Physical activity builds confidence, health, and teamwork.'],
          ['hand-heart', 'Community Service', 'Students learn responsibility by serving their school and community.']
        ])
      ].join('')
    },
    mission: {
      title: 'Mission | ES Kabirizi',
      eyebrow: 'Mission',
      heading: 'Objectives, vision, mission, values, and school quotes.',
      copy: 'The heart of the school in one clear page.',
      image: 'kabirizi picsss/20260323_164557.JPG',
      body: dashboardCards([
        ['Objectives', 'Build knowledge, discipline, responsibility, creativity, service, and national pride.'],
        ['Vision', 'To develop capable learners ready to contribute to Rwanda and the wider world.'],
        ['Mission', 'To provide quality education guided by science, conscience, and community care.'],
        ['Values', 'Respect, discipline, excellence, teamwork, integrity, patriotism, and compassion.'],
        ['Quote', '"Science and conscience guide every learner toward service."'],
        ['School Spirit', 'Learning becomes powerful when knowledge, character, and service grow together.']
      ])
    },
    news: {
      title: 'News | ES Kabirizi',
      eyebrow: 'News Center',
      heading: 'Announcements and babyeyi from the school admin.',
      copy: 'Announcements, notices, achievements, events, and babyeyi uploads appear here automatically.',
      image: 'kabirizi picsss/20260323_164330.JPG',
      body: '<section class="page-section bg-white"><div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8"><div class="dashboard-card"><div class="flex items-center gap-3"><i data-lucide="megaphone" class="w-6 h-6 text-[var(--green)]"></i><h2 class="font-heading text-2xl font-bold text-[var(--navy)]">Announcement Panel</h2></div><div id="announcement-panel" class="mt-6 space-y-4"></div></div><div class="dashboard-card"><div class="flex items-center gap-3"><i data-lucide="image" class="w-6 h-6 text-[var(--green)]"></i><h2 class="font-heading text-2xl font-bold text-[var(--navy)]">Babyeyi Panel</h2></div><div id="babyeyi-panel" class="mt-6 grid sm:grid-cols-2 gap-4"></div></div></div></section>'
    },
    gallery: {
      title: 'Gallery | ES Kabirizi',
      eyebrow: 'Gallery',
      heading: 'School images uploaded by the admin.',
      copy: 'A public image gallery for school moments, campus views, events, and activities.',
      image: 'kabirizi picsss/20260323_164619.JPG',
      body: '<section class="page-section"><div class="max-w-7xl mx-auto"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-5"><div><p class="section-label text-sm font-bold uppercase">Gallery Panel</p><h2 class="section-title">ES Kabirizi in pictures</h2></div><a href="admin.html" class="btn-solid">Upload from admin</a></div><div id="gallery-panel" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"></div></div></section>'
    },
    support: {
      title: 'Support | ES Kabirizi',
      eyebrow: 'Support',
      heading: 'Donate to strengthen learning and student care.',
      copy: 'Support school development through mobile money, bank transfer, or a configured online payment gateway.',
      image: 'assets/donation.png',
      body: donationSection()
    },
    teachers: {
      title: 'Teachers | ES Kabirizi',
      eyebrow: 'Teachers',
      heading: 'Meet the teaching and support team.',
      copy: 'Teacher records added by the admin can support a stronger school directory.',
      image: 'kabirizi picsss/20260323_163443.JPG',
      body: '<section class="page-section bg-white"><div class="max-w-7xl mx-auto"><p class="section-label text-sm font-bold uppercase">Staff Directory</p><h2 class="section-title">Teacher dashboard</h2><div class="grid md:grid-cols-3 gap-5 mt-8"><div class="dashboard-card"><h3>Sciences</h3><p>Mathematics, Biology, Chemistry, Physics, ICT, and practical science support.</p></div><div class="dashboard-card"><h3>Languages</h3><p>Kinyarwanda, English, French, communication, reading, and writing support.</p></div><div class="dashboard-card"><h3>Student Support</h3><p>Discipline, counseling, class leadership, clubs, attendance, and parent follow-up.</p></div></div></div></section>'
    },
    library: {
      title: 'Library | ES Kabirizi',
      eyebrow: 'Library',
      heading: 'Books, study resources, digital learning, and reading culture.',
      copy: 'A useful school tab for learners who need revision materials and reading support.',
      image: 'kabirizi picsss/20260323_163610.JPG',
      body: featureGrid([
        ['library', 'Book Lending', 'Track class books, textbooks, novels, and reference materials.'],
        ['monitor', 'Digital Resources', 'Organize online notes, ICT practice, and research links.'],
        ['clipboard-check', 'Revision Bank', 'Past papers, exercises, and teacher-selected study material.'],
        ['bookmark', 'Reading Culture', 'Reading clubs, book talks, and weekly reading targets.']
      ])
    },
    calendar: {
      title: 'Calendar | ES Kabirizi',
      eyebrow: 'School Calendar',
      heading: 'Events, exams, reporting days, and school activities.',
      copy: 'A useful calendar dashboard keeps parents and students aligned with the school year.',
      image: 'kabirizi picsss/20260323_164605.JPG',
      body: '<section class="page-section bg-white"><div class="max-w-7xl mx-auto"><p class="section-label text-sm font-bold uppercase">Calendar</p><h2 class="section-title">Important school moments</h2><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"><div class="timeline-card"><span>Term Opening</span><strong>Registration, orientation, and class placement.</strong></div><div class="timeline-card"><span>Assessments</span><strong>Quizzes, mid-term tests, and final exams.</strong></div><div class="timeline-card"><span>Parents Day</span><strong>Academic review and school-family follow-up.</strong></div><div class="timeline-card"><span>School Events</span><strong>Clubs, sports, service, and celebration days.</strong></div></div></div></section>'
    },
    results: {
      title: 'Results | ES Kabirizi',
      eyebrow: 'Results',
      heading: 'Academic results and student performance overview.',
      copy: 'A student-results dashboard for grades, GPA, attendance, and academic status.',
      image: 'kabirizi picsss/math.jpg',
      body: '<section class="page-section"><div class="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-8"><div><p class="section-label text-sm font-bold uppercase">Results Dashboard</p><h2 class="section-title">Track progress clearly</h2><p class="section-copy">This page is prepared for student marks, GPA, attendance, semester records, and promotion status. A secure backend would be needed before publishing private student results online.</p></div><div class="dashboard-card"><table class="dashboard-table"><tbody><tr><th>Student</th><td>Student name and ID</td></tr><tr><th>Program</th><td>Mathematics and Science / STEAM 1 / Languages</td></tr><tr><th>Semester</th><td>Term and academic year</td></tr><tr><th>GPA</th><td>Calculated grade average</td></tr><tr><th>Status</th><td>Active, promoted, repeating, or graduated</td></tr></tbody></table></div></div></section>'
    }
  };

  function statBand() {
    return '<section class="page-section bg-white"><div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5"><div class="stat-card"><span>01</span><strong>Academic Programs</strong><p>Science, STEAM, and Languages.</p></div><div class="stat-card"><span>02</span><strong>Student Care</strong><p>Health access, feeding, and guidance.</p></div><div class="stat-card"><span>03</span><strong>Community</strong><p>Families, teachers, and leaders together.</p></div><div class="stat-card"><span>04</span><strong>Growth</strong><p>Clubs, results, library, and calendar.</p></div></div></section>';
  }

  function principalWelcome() {
    return '<section class="page-section principal-band"><div class="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center"><div class="principal-photo scroll-reveal"><img src="kabirizi picsss/20260323_163248.JPG" alt="ES Kabirizi school leadership and campus"></div><div class="scroll-reveal"><p class="section-label text-sm font-bold uppercase">Welcome Message</p><h2 class="section-title">A caring campus for serious learning.</h2><p class="section-copy">ES Kabirizi welcomes students, parents, teachers, and partners into a school community shaped by discipline, science, conscience, and service. The website now works as a larger school portal where visitors can move quickly from admissions to academics, news, support, gallery, library, calendar, and results.</p><div class="principal-quote"><span>"</span><p>Every learner deserves a school that is organized, caring, ambitious, and connected to the community.</p></div></div></div></section>';
  }

  function programPathways() {
    return '<section class="page-section bg-white"><div class="max-w-7xl mx-auto"><div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"><div><p class="section-label text-sm font-bold uppercase">Learning Pathways</p><h2 class="section-title">Programs that lead somewhere.</h2></div><a href="academic.html" class="btn-solid">View academic dashboard</a></div><div class="pathway-grid mt-10"><article><img src="kabirizi picsss/math.jpg" alt="Mathematics learning"><div><span>01</span><h3>Mathematics and Science</h3><p>Strong numeracy, experiments, scientific thinking, and exam preparation.</p></div></article><article><img src="kabirizi picsss/science.jpg" alt="Science learning"><div><span>02</span><h3>STEAM 1</h3><p>Science, technology, engineering, arts, and mathematics for practical problem solving.</p></div></article><article><img src="kabirizi picsss/20260323_163610.JPG" alt="Language learning"><div><span>03</span><h3>Languages</h3><p>Communication, reading, writing, public speaking, and confidence in expression.</p></div></article></div></div></section>';
  }

  function campusLifeShowcase() {
    return '<section class="page-section campus-life-band"><div class="max-w-7xl mx-auto"><div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center"><div><p class="section-label text-sm font-bold uppercase">Campus Life</p><h2 class="section-title">More than classroom time.</h2><p class="section-copy">A full school experience includes daily routines, clubs, sports, alimentation, guidance, peer leadership, revision, and service. These areas help students grow academically and personally.</p><div class="life-list"><span>Morning assembly</span><span>Clubs and debate</span><span>Sports and wellbeing</span><span>Revision and mentoring</span><span>School feeding</span><span>Community service</span></div></div><div class="campus-mosaic"><img src="kabirizi picsss/20260323_164135.JPG" alt="Campus view"><img src="kabirizi picsss/garuka ushimee pics.jpg" alt="School community"><img src="kabirizi picsss/20260323_164557.JPG" alt="School grounds"></div></div></div></section>';
  }

  function admissionSteps() {
    return '<section class="page-section bg-white"><div class="max-w-7xl mx-auto"><p class="section-label text-sm font-bold uppercase">Admission Steps</p><h2 class="section-title">From inquiry to registration.</h2><div class="step-grid mt-10"><div><span>1</span><h3>Choose Program</h3><p>Review Mathematics and Science, STEAM 1, Languages, and general learning options.</p></div><div><span>2</span><h3>Apply</h3><p>Send student information with either an email address or phone number.</p></div><div><span>3</span><h3>Submit Achievement</h3><p>Share previous results, certificates, conduct notes, or learner achievements.</p></div><div><span>4</span><h3>Register</h3><p>The school office follows up and stores the registration in the admin panel.</p></div></div></div></section>';
  }

  function homeNewsPreview() {
    return '<section class="page-section"><div class="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-8"><div class="dashboard-card home-preview-card"><p class="section-label text-sm font-bold uppercase">News Preview</p><h2 class="font-heading text-3xl font-bold text-[var(--navy)] mt-3">Announcements from admin</h2><p class="mt-4 text-slate-600 leading-relaxed">School announcements uploaded in the admin portal appear on the News page for families and students.</p><a href="news.html" class="btn-solid mt-6">Open news</a></div><div class="dashboard-card home-preview-card"><p class="section-label text-sm font-bold uppercase">Gallery Preview</p><h2 class="font-heading text-3xl font-bold text-[var(--navy)] mt-3">School images and babyeyi</h2><p class="mt-4 text-slate-600 leading-relaxed">Gallery images and babyeyi uploaded by the admin become public in the gallery and news dashboards.</p><a href="gallery.html" class="btn-solid mt-6">Open gallery</a></div></div></section>';
  }

  function partnerStrip() {
    return '<section class="page-section bg-white"><div class="max-w-7xl mx-auto"><p class="section-label text-sm font-bold uppercase">Education Partners</p><h2 class="section-title">Connected to Rwanda education.</h2><div class="partner-grid mt-10"><div><img src="kabirizi picsss/republic of rw.png" alt="Republic of Rwanda"><span>Republic of Rwanda</span></div><div><img src="kabirizi picsss/ministry of education.png" alt="Ministry of Education"><span>Ministry of Education</span></div><div><img src="kabirizi picsss/reb.png" alt="Rwanda Basic Education Board"><span>REB</span></div><div><img src="kabirizi picsss/ngoma.jpg" alt="Ngoma District"><span>Ngoma District</span></div></div></div></section>';
  }

  function featureGrid(items) {
    return '<section class="page-section"><div class="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">' + items.map(function (item) {
      return '<div class="feature-card scroll-reveal"><i data-lucide="' + item[0] + '" class="w-7 h-7"></i><h3>' + item[1] + '</h3><p>' + item[2] + '</p></div>';
    }).join('') + '</div></section>';
  }

  function dashboardCards(items) {
    return '<section class="page-section"><div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">' + items.map(function (item) {
      return '<article class="dashboard-card scroll-reveal"><h3>' + item[0] + '</h3><p>' + item[1] + '</p></article>';
    }).join('') + '</div></section>';
  }

  function splitSection(title, copy, image) {
    return '<section class="page-section bg-white"><div class="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center"><div class="scroll-reveal"><p class="section-label text-sm font-bold uppercase">School Portal</p><h2 class="section-title">' + title + '</h2><p class="section-copy">' + copy + '</p></div><div class="media-frame h-[430px] shadow-xl scroll-reveal"><img src="' + image + '" alt="ES Kabirizi campus"></div></div></section>';
  }

  function quickLinks() {
    return '<section class="page-section"><div class="max-w-7xl mx-auto"><p class="section-label text-sm font-bold uppercase">Explore</p><h2 class="section-title">Open a school dashboard</h2><div class="quick-grid mt-8">' + navItems.filter(function (item) { return item[0] !== 'admin'; }).slice(1).map(function (item) {
      return '<a href="' + item[2] + '"><span>' + item[1] + '</span><i data-lucide="arrow-up-right" class="w-5 h-5"></i></a>';
    }).join('') + '</div></div></section>';
  }

  function progressSection() {
    return '<section class="page-section"><div class="max-w-7xl mx-auto"><div class="dashboard-card"><p class="section-label text-sm font-bold uppercase">Academic Strength</p><h2 class="section-title">Learning indicators</h2><div class="mt-8 grid md:grid-cols-3 gap-5"><div class="progress-item"><span>Attendance</span><div><i style="width:92%"></i></div></div><div class="progress-item"><span>Classwork</span><div><i style="width:86%"></i></div></div><div class="progress-item"><span>Conduct</span><div><i style="width:94%"></i></div></div></div></div></div></section>';
  }

  function registrationForm() {
    return '<section class="page-section bg-white"><div class="max-w-4xl mx-auto"><form id="registration-form" class="dashboard-card"><h2 class="font-heading text-3xl font-bold text-[var(--navy)]">Student Registration</h2><p class="mt-2 text-slate-600">Use email or phone number. One of them is required.</p><div class="grid sm:grid-cols-2 gap-5 mt-6"><div><label for="first-name" class="form-label">Student Name *</label><input id="first-name" type="text" required class="form-input" placeholder="Enter student name"></div><div><label for="program-interest" class="form-label">Program Interest</label><select id="program-interest" class="form-input"><option>Mathematics and Science</option><option>STEAM 1</option><option>Languages</option><option>General Studies</option></select></div><div><label for="email-address" class="form-label">Email Address</label><input id="email-address" type="email" class="form-input" placeholder="Email, if available"></div><div><label for="phone-number" class="form-label">Phone Number</label><input id="phone-number" type="tel" class="form-input" placeholder="Phone, if available"></div><div class="sm:col-span-2"><label for="student-message" class="form-label">Message or Inquiry *</label><textarea id="student-message" rows="4" required class="form-input" placeholder="Write your registration request"></textarea></div></div><button type="submit" class="btn-solid mt-6"><i data-lucide="user-plus" class="w-5 h-5"></i> Register</button><p id="registration-message" class="hidden mt-4 text-sm font-semibold"></p></form></div></section>';
  }

  function donationSection() {
    return `
      <section class="page-section donation-showcase bg-white">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-[0.82fr_1.18fr] gap-10 items-center">
          <div class="scroll-reveal">
            <p class="section-label text-sm font-bold uppercase">Support Education</p>
            <h2 class="section-title">Invest in students and open doors to opportunity.</h2>
            <p class="section-copy">Your donation helps ES Kabirizi strengthen learning, support students, and build a brighter future for the whole school community.</p>
            <div class="donation-highlights">
              <span><i data-lucide="book-open"></i> Learning materials</span>
              <span><i data-lucide="graduation-cap"></i> Student support</span>
              <span><i data-lucide="hand-heart"></i> Community impact</span>
            </div>
            <a href="support.html" class="btn-solid mt-7"><i data-lucide="hand-heart" class="w-5 h-5"></i> Support the school</a>
          </div>
          <figure class="donation-poster scroll-reveal">
            <img src="assets/donation.png" alt="Invest in education donation poster">
          </figure>
        </div>
      </section>
      <section class="page-section donation-payment-band">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div>
            <p class="section-label text-sm font-bold uppercase">Payment System</p>
            <h2 class="section-title">Online donation checkout</h2>
            <p class="section-copy">The buttons below are ready for real provider payment links. Add the school payment URLs in <code>assets/site.js</code> when the school has merchant accounts. Until then, mobile money and bank details are shown for real-world manual payment confirmation.</p>
            <div class="payment-grid mt-8">
              <button type="button" data-payment-provider="mtn"><i data-lucide="smartphone"></i><span>MTN MoMo Pay</span></button>
              <button type="button" data-payment-provider="airtel"><i data-lucide="smartphone"></i><span>Airtel Money</span></button>
              <button type="button" data-payment-provider="card"><i data-lucide="credit-card"></i><span>Card Checkout</span></button>
              <button type="button" data-payment-provider="bank"><i data-lucide="landmark"></i><span>Bank Transfer</span></button>
            </div>
            <div class="mt-8 rounded-2xl bg-[#092f6a] p-6 text-white">
              <h3 class="font-heading text-2xl font-bold">Current Donation Details</h3>
              <p class="mt-3 text-white/85">Mobile Money recipient: NSENGIYUMVA Emmanuel</p>
              <p class="font-bold">Phone: +250 788 499 105</p>
              <p class="mt-3 text-white/75 text-sm">Replace placeholder bank details with the official school account before publishing.</p>
            </div>
          </div>
          <form id="donation-form" class="dashboard-card">
            <h3 class="font-heading text-2xl font-bold text-[#092f6a]">Donation Confirmation Form</h3>
            <div class="grid sm:grid-cols-2 gap-4 mt-6">
              <div><label for="payment-name" class="form-label">Donor Name *</label><input id="payment-name" type="text" required class="form-input" placeholder="Enter your name"></div>
              <div><label for="payment-phone" class="form-label">Phone Number *</label><input id="payment-phone" type="tel" required class="form-input" placeholder="Enter your phone"></div>
              <div><label for="payment-method" class="form-label">Payment Method *</label><select id="payment-method" class="form-input"><option>MTN Mobile Money</option><option>Airtel Money</option><option>Bank Transfer</option><option>Online Card Checkout</option></select></div>
              <div><label for="payment-amount" class="form-label">Amount *</label><input id="payment-amount" type="text" required class="form-input" placeholder="Example: 10,000 RWF"></div>
              <div class="sm:col-span-2"><label for="payment-reference" class="form-label">Transaction ID or Reference *</label><input id="payment-reference" type="text" required class="form-input" placeholder="Enter confirmation reference"></div>
            </div>
            <button type="submit" class="btn-solid mt-6"><i data-lucide="hand-heart" class="w-5 h-5"></i> Submit Donation</button>
            <p id="donation-message" class="hidden mt-4 text-sm font-semibold"></p>
            <p id="payment-message" class="hidden mt-4 text-sm font-semibold"></p>
          </form>
        </div>
      </section>`;
  }

  function renderPage(pageId) {
    const page = pages[pageId] || pages.home;
    document.title = page.title;
    const app = document.getElementById('app');
    if (!app) return;
    const activeNav = navItems.map(function (item) {
      const active = item[0] === pageId ? 'text-yellow-200' : 'hover:text-yellow-200';
      return '<a href="' + item[2] + '" class="' + active + '">' + item[1] + '</a>';
    }).join('');
    const mobileNav = navItems.map(function (item) {
      const active = item[0] === pageId ? 'text-yellow-200' : '';
      return '<a href="' + item[2] + '" class="' + active + '">' + item[1] + '</a>';
    }).join('');
    const ctas = (page.cta || []).map(function (item, index) {
      return '<a href="' + item[1] + '" class="' + (index === 0 ? 'btn-primary' : 'btn-secondary') + ' px-7 py-3 rounded-full font-semibold text-sm">' + item[0] + '</a>';
    }).join('');

    app.innerHTML = [
      '<div id="page-loader" class="page-loader"><div class="loader-ring"></div><p class="loader-text">Loading ES Kabirizi</p></div>',
      '<div class="bg-[var(--navy)] text-white text-sm px-4 py-2"><div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3"><div class="flex flex-wrap items-center gap-4"><span class="flex items-center gap-2 opacity-90"><i data-lucide="mail" class="w-4 h-4"></i> eskabirizi02@gmail.com</span><span class="flex items-center gap-2 opacity-90"><i data-lucide="phone" class="w-4 h-4"></i> +250 788 499 105</span></div><span class="hidden sm:inline text-white/75">Kabirizi, Ngoma District, Rwanda</span></div></div>',
      '<nav class="nav-glass sticky top-0 z-50 shadow-lg"><div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4"><a href="index.html" class="flex items-center gap-3 min-w-0"><img src="kabirizi picsss/%C3%89cole%20Secondaire%20DE.KABIRIZI%20emblem.png" alt="ES Kabirizi emblem" class="w-12 h-12 rounded-full bg-white p-1.5 shrink-0"><div class="min-w-0"><div class="text-white font-heading font-bold text-lg leading-tight">ES Kabirizi</div><div class="text-yellow-200 text-xs tracking-[0.18em] uppercase">Science and conscience</div></div></a><div class="hidden xl:flex items-center gap-3 text-white text-sm font-medium flex-wrap justify-end">' + activeNav + '</div><button id="menu-btn" class="xl:hidden text-white" aria-label="Toggle menu"><i data-lucide="menu" class="w-7 h-7"></i></button></div><div id="mobile-nav" class="mobile-menu xl:hidden nav-glass px-4"><div class="flex flex-col gap-3 py-4 text-white text-sm font-medium">' + mobileNav + '</div></div></nav>',
      '<main><section class="page-hero-rich" style="background-image: linear-gradient(90deg, rgba(4,39,91,0.88), rgba(23,111,210,0.62), rgba(0,0,0,0.18)), url(&quot;' + page.image + '&quot;);"><div class="max-w-7xl mx-auto px-4 min-h-[58vh] flex items-center py-20"><div class="max-w-3xl hero-copy"><p class="section-label text-sm font-bold uppercase">' + page.eyebrow + '</p><h1 class="font-heading text-white text-4xl md:text-6xl leading-tight mt-3">' + page.heading + '</h1><p class="text-slate-100 text-lg md:text-xl leading-relaxed mt-5">' + page.copy + '</p><div class="flex flex-wrap gap-4 mt-8">' + ctas + '</div></div></div></section>' + page.body + '</main>',
      '<div id="img-modal" class="img-modal" aria-hidden="true"><div class="img-modal-content"><button class="img-modal-close" aria-label="Close">&times;</button><img id="img-modal-img" src="" alt=""><a id="img-modal-download" class="btn-primary px-5 py-2 rounded-full mt-4" href="#" download>Download</a></div></div>',
      '<footer class="bg-slate-100 text-slate-900"><div class="bg-[#092f6a] text-white text-sm px-4 py-3"><div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3"><span>+250 788 499 105</span><span>eskabirizi02@gmail.com</span></div></div><div class="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3"><div><img src="kabirizi picsss/%C3%89cole%20Secondaire%20DE.KABIRIZI%20emblem.png" alt="ES Kabirizi emblem" class="w-20 h-20 rounded-full bg-white p-3"><p class="mt-5 text-sm text-slate-600">ES Kabirizi is a school where science and conscience guide learning, discipline, and service.</p></div><nav class="grid grid-cols-2 gap-3 text-sm text-slate-600">' + navItems.slice(0, 12).map(function (item) { return '<a href="' + item[2] + '" class="hover:text-slate-900">' + item[1] + '</a>'; }).join('') + '</nav><div class="text-sm text-slate-600"><h3 class="text-lg font-semibold text-slate-900 mb-4">Get In Touch</h3><p>Kabirizi, Ngoma District, Rwanda</p><p class="mt-2">eskabirizi02@gmail.com</p><p class="mt-2">+250 788 499 105</p></div></div><div class="border-t border-slate-200"><div class="max-w-7xl mx-auto px-4 py-5 text-center text-sm text-slate-500">&copy; 2026 ES Kabirizi. All rights reserved.</div></div></footer>'
    ].join('');
  }

  renderPage(window.ESK_PAGE || 'home');
})();

