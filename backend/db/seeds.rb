puts 'Creating todos...'

5.times do |i|
  Todo.create(title: "Todo#{i + 1}")
end

puts '...Finished!'
