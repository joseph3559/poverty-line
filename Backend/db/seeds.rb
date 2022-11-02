# puts "seeding demo user_profiles..."

# UserProfile.create(firstname: 'Earnest', lastname: 'Achayo', email: 'earnytech@live.com', phone: 0723455433, gender: 'Male', dob: '1992-11-10', national_id: 297364546, address: '555 Nairobi', county: 'Nakuru', estate: 'Buma', user_id: 2, career_summary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' , experience: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' , education: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', skills_and_hobbies: 'reading', languages: 'English Kiswahili Kikuyu', image:'hffhfhfj')
# UserProfile.create(firstname: 'Jacky', lastname: 'Chan', email: 'chanbaby@live.com', phone: 0723455433, gender: 'Female', dob: '1996-11-10', national_id: 307364546, address: '222-444 Nairobi', county: 'Mombasa', estate: 'Diani', user_id: 1, career_summary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' , experience: 'Lorem ipsum dolor sit amet consectetur adipiscing elit' , education: 'Lorem ipsum dolor sit amet consectetur adipiscing elit', skills_and_hobbies: 'reading', languages: 'English Kiswahili Kikuyu', image:'hffhfhfj')

# puts "Done seeding user Profiles!"

# puts "seeding demo jobs..."

# Job.create(job_title: "Software Endineer", job_description: "Software enginners with good knowledge on proramming. Must be ready to adapt to tech changes", required_skills: "Javascript, react, AWS, Rails, Kotlin and other a bit of knowledge in android system development", job_link: "wwww.jmoko.com", admin_id: 2)
# Job.create(job_title: "Network Administrator", job_description: "Good interpesonal and communication skills, good at networking in SISCO Must be ready to adapt to tech changes", required_skills: "Networking SISCO", job_link: "wwww.jmoko.com", admin_id: 2)

# puts "Done seeding user Profiles!"

# puts "seeding user email and password..."

# User.create!(email: 'cliffbosire@gmail.com', password_digest: '12345t')

# puts "Done seeding user email and password!"


puts "seeding admin"
Admin.create(first_name: 'Cahayo', last_name: 'Ano', email: 'earnytechking@live.com')
puts "done seeding admin.."
