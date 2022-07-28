pub fn template_replace(template: &str, section: &str, with: &str) -> String {
    if let Some((left, right)) = template.split_once(&format!("//---{}_BEGIN", section)) {
        let (_, right) = right.split_once(&format!("//---{}_END", section)).unwrap();
        format!("{}{}{}", left, with, template_replace(right, section, with))
    }
    else if let Some((left, right)) = template.split_once(&format!("//---{}", section)) {
        format!("{}{}{}", left, with, template_replace(right, section, with))
    } else {
        template.to_string()
    }
}
