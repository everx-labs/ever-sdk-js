use crate::template::template_replace;

#[test]
fn test_templates() {
    assert_eq!(template_replace("a\n//---A_BEGIN\naaa\n//---A_END\nb", "A", "B"), "a\nB\nb");
    assert_eq!(template_replace("a\n//---A\nb", "A", "B"), "a\nB\nb")
}
