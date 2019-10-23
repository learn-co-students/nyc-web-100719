class PalindromeCheck
  def check(word)
    downcase_word = word.downcase
    joined_word = downcase_word.split.join
    joined_word == joined_word.reverse
  end
end